// 1. 改用 import 引入依赖
import { ethers } from 'ethers';

// 2. 直接在类前面加上 export 关键字
export class NFTSDK {
  // 使用类字段的简洁写法，也可以保持原有constructor写法
  constructor(config) {
    // 解构赋值优化配置参数读取（ES6+特性）
    const { contractAddress, abi, rpcUrl, ipfsGateway } = config;
    
    this.contractAddress = contractAddress;
    this.abi = abi;
    this.ipfsGateway = ipfsGateway || 'https://ipfs.io/ipfs/';
    
    // Provider 初始化（使用可选链和空值合并运算符优化）
    if (rpcUrl) {
      this.provider = new ethers.JsonRpcProvider(rpcUrl);
    } else if (typeof window !== 'undefined' && window?.ethereum) {
      this.provider = new ethers.BrowserProvider(window.ethereum);
    } else {
      this.provider = null;
    }
    
    // 创建合约实例（可选链优化）
    if (this.provider) {
      this.contract = new ethers.Contract(
        this.contractAddress,
        this.abi,
        this.provider
      );
    }
  }

  // 核心方法：获取NFT图片URL（使用async/await，ES6+）
  async getNFTImageUrl(tokenId) {
    try {
      // 1. 获取tokenURI
      const tokenURI = await this.contract.tokenURI(tokenId);
      
      // 2. 获取元数据
      const metadata = await this.fetchMetadata(tokenURI);
      
      // 3. 解析图片URL
      const imageUrl = this.resolveImageUrl(metadata.image);
      
      return imageUrl;
    } catch (error) {
      console.error('获取NFT图片失败:', error);
      throw error;
    }
  }

  // 使用async/await，ES6+
  async fetchMetadata(tokenURI) {
    const resolvedURI = this.resolveIPFSUri(tokenURI);
    const response = await fetch(resolvedURI);
    
    if (!response.ok) {
      throw new Error(`元数据请求失败: ${response.statusText}`);
    }
    
    return await response.json();
  }

  // 箭头函数风格也可以，但原型方法更适合类
  resolveIPFSUri(uri) {
    return uri.startsWith('ipfs://') 
      ? uri.replace('ipfs://', this.ipfsGateway) 
      : uri;
  }

  resolveImageUrl(imageUri) {
    if (!imageUri) return '';
    return imageUri.startsWith('ipfs://') 
      ? imageUri.replace('ipfs://', this.ipfsGateway) 
      : imageUri;
  }

  // 连接钱包（前端用）
  async connectWallet() {
    if (typeof window === 'undefined' || !window?.ethereum) {
      throw new Error('请安装MetaMask钱包');
    }
    
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    
    // 更新实例属性
    this.provider = provider;
    this.contract = new ethers.Contract(
      this.contractAddress,
      this.abi,
      provider
    );
    
    return provider;
  }

  // 可选：添加一个辅助方法，获取NFT所有者
  async getNFTOwner(tokenId) {
    if (!this.contract) {
      throw new Error('合约实例未初始化，请先连接钱包或配置RPC URL');
    }
    return await this.contract.ownerOf(tokenId);
  }
}

// 3. 已删除底部的 module.exports = ...