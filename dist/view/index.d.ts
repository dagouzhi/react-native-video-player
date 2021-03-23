import { Component } from 'react';
import { Animated } from 'react-native';
export declare const Loading: (props: any) => JSX.Element;
export declare class Lock extends Component {
    state: {
        lock: boolean;
    };
    onChangeLock: () => void;
    render(): JSX.Element;
}
export declare const TipsPaused: (props: any) => JSX.Element;
export declare class Brightness extends Component {
    constructor(props: any);
    setBrightnessWidthFun: (data: any) => void;
    render(): JSX.Element;
}
export declare class Volume extends Component {
    state: {
        soundWidth: number;
    };
    setsoundWidth: (soundWidth: any) => void;
    render(): JSX.Element;
}
export declare const BottomSpeed: (props: any) => JSX.Element;
export declare const Header: (props: any) => JSX.Element;
export declare class AnFastSvg extends Component {
    state: {
        fV: Animated.Value;
        sV: Animated.Value;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    loopAnimation: () => void;
    cancelAnim(): void;
    render(): JSX.Element;
}
export declare class Speed extends Component {
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
    render(): JSX.Element;
}
export declare class SpeedTipTime extends Component {
    state: {
        goSpeedTime: string;
    };
    setgoSpeedTime: (goSpeedTime: any) => void;
    render(): JSX.Element;
}
