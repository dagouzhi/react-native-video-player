import { Component } from 'react';
import { Animated } from 'react-native';
export declare const Loading: (props: any) => JSX.Element;
export declare class Lock extends Component<any, any> {
    state: {
        lock: boolean;
    };
    onChangeLock: () => void;
    render(): JSX.Element;
}
export declare const TipsPaused: (props: any) => JSX.Element;
export declare class Brightness extends Component<any, any> {
    constructor(props: any);
    setBrightnessWidthFun: (data: any) => void;
    render(): JSX.Element;
}
export declare class Volume extends Component<any, any> {
    state: {
        soundWidth: number;
    };
    setsoundWidth: (soundWidth: any) => void;
    render(): JSX.Element;
}
export declare const BottomSpeed: (props: any) => JSX.Element;
export declare const Header: (props: any) => JSX.Element;
export declare class AnFastSvg extends Component<any, any> {
    state: {
        fV: Animated.Value;
        sV: Animated.Value;
    };
    anmin: number;
    componentDidMount(): void;
    componentWillUnmount(): void;
    loopAnimation: () => void;
    cancelAnim(): void;
    render(): JSX.Element;
}
export declare class Speed extends Component<any, any> {
    state: {
        allTime: string;
        nowTime: string;
        dotStart: boolean;
        dotWidth: number;
    };
    setNativeProps: (data: any) => void;
    setdotWidth: (dotWidth: any) => void;
    setSpeed: (e: any) => void;
    setdotStart: (e: any) => void;
    nowTime: number;
    render(): JSX.Element;
}
export declare class SpeedTipTime extends Component<any, any> {
    state: {
        goSpeedTime: string;
    };
    setgoSpeedTime: (goSpeedTime: any) => void;
    render(): JSX.Element;
}
