import { ConnectButton } from '@rainbow-me/rainbowkit';
import  "./home.css"
import React from 'react';

const MemoizedButton = React.memo(ConnectButton);
export default function Home(){
    return (<>
    Hello
    <MemoizedButton accountStatus="avatar"/>
    </>);
}