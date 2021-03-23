import React from 'react';
import { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Dimensions, Animated, StatusBar, Platform, SafeAreaView } from 'react-native';
import { SvgVideoUnlock, SvgVideoLocking, SvgVideoLoading, SvgVideoBrightness, SvgVideoNoSound, SvgVideoStop, SvgVideoSound, SvgVideoFastSpeed } from '../src/component/svg';
import { formatSeconds } from '../utils/formatSeconds';
const { height, width } = Dimensions.get('screen');
export const Loading = (props) => {
    return (React.createElement(React.Fragment, null, props.showLoading ?
        React.createElement(View, { style: {
                left: props.width / 2 - 45, position: "absolute",
                top: props.height / 2 - 35,
                justifyContent: "center",
                zIndex: 10
            } },
            React.createElement(View, { style: {
                    justifyContent: "center", alignItems: 'center', backgroundColor: "rgba(0,0,0,0.7)", paddingHorizontal: 10,
                    paddingVertical: 11, borderRadius: 6,
                } },
                React.createElement(Animated.View, { style: { transform: [{ rotate: props.spin }] } }, props.loadingIcon
                    ?
                        props.loadingIcon
                    :
                        React.createElement(SvgVideoLoading, { height: "30", width: "30" })),
                React.createElement(View, null,
                    React.createElement(Text, { style: { color: "#fff" } }, props.loadingText ? props.loadingText : "正在缓冲..."))))
        :
            null));
};
//锁定
export class Lock extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            lock: false
        };
        this.onChangeLock = () => {
            this.props.showContsfun(this.state.lock);
            this.setState({
                lock: !this.state.lock
            });
        };
    }
    render() {
        const { props } = this;
        const { lock } = this.state;
        if (props.showLockCont) {
            return (React.createElement(Animated.View, { style: {
                    opacity: props.opacity,
                    left: props.smallP ? 5 : 45, position: "absolute",
                    top: props.height / 2 - 35,
                    justifyContent: "center",
                    zIndex: 10
                } },
                React.createElement(TouchableOpacity, { activeOpacity: 1, style: {
                        padding: 10,
                    }, onPress: this.onChangeLock }, lock ? React.createElement(SvgVideoLocking, { width: "28", height: "28" }) : React.createElement(SvgVideoUnlock, { width: "30", height: "30" }))));
        }
        else {
            return null;
        }
    }
}
//暂停的tips
export const TipsPaused = (props) => {
    let timer = '';
    const [animater, setAnimater] = React.useState(new Animated.Value(0));
    const [show, setShow] = React.useState(true);
    React.useEffect(() => {
        tipsPausedFun();
    }, []);
    //控件显示动画
    const AnimatedOp = Animated.timing(
    // timing方法使动画值随时间变化
    animater, // 要变化的动画值
    {
        toValue: 1,
        duration: 300,
        useNativeDriver: false
    });
    function tipsPausedFun() {
        if (AnimatedOp) {
            AnimatedOp.stop();
        }
        if (timer) {
            clearTimeout(timer);
        }
        AnimatedOp.start(() => {
            timer = setTimeout(() => {
                setShow(false);
            }, 2000);
        });
    }
    if (show) {
        return React.createElement(Animated.View, { style: [styles.TipsPausedBox, { opacity: animater, left: props.width / 2 - 37, top: props.height / 2 - 15, }] },
            React.createElement(SvgVideoStop, { height: "16", width: "16" }),
            React.createElement(Text, { style: styles.TipsPausedText }, props.pausedTipText ? props.pausedTipText : "已暂停"));
    }
    else {
        return null;
    }
};
//亮度
export class Brightness extends Component {
    constructor(props) {
        super(props);
        this.setBrightnessWidthFun = (data) => {
            this.setState({
                brightnessWidth: data
            });
        };
        this.state = {
            brightnessWidth: 0
        };
    }
    render() {
        const { props } = this;
        const { brightnessWidth } = this.state;
        return (React.createElement(View, { style: {
                left: props.width / 2 - 80, position: "absolute",
                top: 0, bottom: 0, justifyContent: "center",
            } },
            React.createElement(View, { style: {
                    flexDirection: "row", flexWrap: "nowrap", justifyContent: "center", alignItems: 'center', backgroundColor: "rgba(0,0,0,0.7)", paddingHorizontal: 10,
                    paddingVertical: 11, borderRadius: 6,
                } },
                React.createElement(SvgVideoBrightness, { width: "20", height: "20" }),
                React.createElement(View, { style: { backgroundColor: "rgba(255,255,255,0.5)", height: 2, width: 100, marginLeft: 8 } },
                    React.createElement(Animated.View, { style: { backgroundColor: "#ea7a99", width: brightnessWidth && brightnessWidth, zIndex: 99999, height: 2 } })))));
    }
}
//音量
export class Volume extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            soundWidth: 0.1
        };
        this.setsoundWidth = (soundWidth) => {
            this.setState({
                soundWidth
            });
        };
    }
    render() {
        const { props } = this;
        const { soundWidth } = this.state;
        return (React.createElement(View, { style: {
                left: props.width / 2 - 80, position: "absolute",
                top: 0, bottom: 0, justifyContent: "center",
            } },
            React.createElement(View, { style: {
                    flexDirection: "row", flexWrap: "nowrap", justifyContent: "center", alignItems: 'center', backgroundColor: "rgba(0,0,0,0.7)", paddingHorizontal: 10,
                    paddingVertical: 11, borderRadius: 6,
                } },
                soundWidth > 0 ? React.createElement(SvgVideoSound, { width: "20", height: "20" }) : React.createElement(SvgVideoNoSound, { width: "20", height: "20" }),
                React.createElement(View, { style: { backgroundColor: "rgba(255,255,255,0.5)", height: 2, width: 100, marginLeft: 8 } },
                    React.createElement(Animated.View, { style: { backgroundColor: "#ea7a99", width: soundWidth && soundWidth, zIndex: 99999, height: 2 } })))));
    }
}
export const BottomSpeed = (props) => {
    return (React.createElement(View, { style: { width: props.width, bottom: 0, zIndex: 999, position: "absolute" } },
        React.createElement(View, { style: { flex: 1, alignItems: "center", zIndex: 999, justifyContent: "space-around", flexDirection: "row", flexWrap: "nowrap", bottom: 0 } },
            React.createElement(View, { style: { width: props.width, flexDirection: "row", flexWrap: "nowrap", zIndex: 10 } },
                React.createElement(Animated.View, { style: { zIndex: 12, width: props.playhideContsDotX === null ? 0 : (props.admRePlay ? 0 : props.playhideContsDotX), height: Platform.OS === "android" ? 2 : 3, backgroundColor: props.bottomSpeedColor } })))));
};
export const Header = (props) => {
    return (React.createElement(React.Fragment, null,
        props.width === width && Platform.OS === "android" ?
            React.createElement(View, { style: { height: StatusBar.currentHeight, backgroundColor: "#000" } })
            :
                React.createElement(SafeAreaView, { style: { backgroundColor: "#000" } }),
        React.createElement(StatusBar, { translucent: true, barStyle: "light-content" })));
};
var animationT = 0;
var animationN = 5;
var animationM = 2;
export class AnFastSvg extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            fV: new Animated.Value(0),
            sV: new Animated.Value(0)
        };
        this.loopAnimation = () => {
            var t0 = animationT, t1 = t0 + 10;
            var v1 = Number(Math.cos(t0).toFixed(2)) * animationN + animationM;
            var v2 = Number(Math.cos(t1).toFixed(2)) * animationN + animationM;
            this.setState({
                fV: v1,
                sV: v2,
            });
            animationT += 0.25;
            this.anmin && cancelAnimationFrame(this.anmin);
            this.anmin = requestAnimationFrame(this.loopAnimation);
        };
    }
    componentDidMount() {
        animationT = 0;
        this.anmin = requestAnimationFrame(this.loopAnimation);
    }
    componentWillUnmount() {
        this.cancelAnim();
    }
    cancelAnim() {
        cancelAnimationFrame(this.anmin);
    }
    render() {
        const { fV, sV } = this.state;
        const { isSolTouch, videoRate, solText = "快退中...", fastText = "快进中..." } = this.props;
        return (React.createElement(React.Fragment, null,
            React.createElement(View, { style: { flexDirection: 'row', position: "relative", width: 30, alignItems: 'center', justifyContent: 'center' } },
                React.createElement(Animated.View, { style: { position: 'absolute', left: sV, width: 20, height: 20, alignItems: 'center', justifyContent: 'center', transform: [{ rotateY: isSolTouch ? '180deg' : "0deg" }] } },
                    React.createElement(SvgVideoFastSpeed, { width: "16", height: "16" })),
                React.createElement(Animated.View, { style: { position: 'absolute', left: fV, width: 20, height: 20, alignItems: 'center', justifyContent: 'center', transform: [{ rotateY: isSolTouch ? '180deg' : "0deg" }] } },
                    React.createElement(SvgVideoFastSpeed, { width: "20", height: "20", fill: "#e6e6e6" }))),
            React.createElement(Text, { style: { color: "#fff", fontSize: 12 } }, isSolTouch ? solText : `${videoRate}x ${fastText}`)));
    }
}
export class Speed extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            allTime: "00:00",
            nowTime: "00:00",
            dotStart: false,
            dotWidth: 0
        };
        this.setNativeProps = (data) => {
            this.refs.dotspeed.setNativeProps(data);
        };
        this.setdotWidth = (dotWidth) => {
            this.setState({ dotWidth });
        };
        this.setSpeed = (e) => {
            if (this.nowTime != parseInt(e.currentTime)) {
                this.nowTime = parseInt(e.currentTime);
                this.props.ismoveDot ?
                    this.setState({
                        nowTime: formatSeconds(e.currentTime),
                    })
                    :
                        this.setState({
                            nowTime: formatSeconds(e.currentTime),
                            dotStart: false
                        });
            }
        };
        this.setdotStart = (e) => {
            const dotStart = this.state.dotStart;
            if (e && !dotStart) {
                this.setState({ dotStart: true });
            }
            if (!e && dotStart) {
                this.setState({ dotStart: false });
            }
        };
    }
    render() {
        const { props } = this;
        const { nowTime, dotStart, dotWidth } = this.state;
        return (React.createElement(View, { style: { elevation: 10, flex: 1, alignItems: "center", zIndex: 9999, justifyContent: "center", flexDirection: "row", flexWrap: "nowrap", bottom: 0 } },
            React.createElement(View, null,
                React.createElement(Text, { style: { color: "#ffffff" } }, props.admRePlay ? "00:00" : (nowTime == "00:00" ? props.nowTime : nowTime))),
            React.createElement(View, { style: { width: props.width - 180, paddingHorizontal: 10, flexDirection: "row", flexWrap: "nowrap", zIndex: 10, alignItems: "center", position: "relative", } },
                React.createElement(Animated.View, { style: { zIndex: 12, width: dotStart ? dotWidth : props.admRePlay ? 0 : (props.playDotX === null ? 0 : props.playDotX), height: 2, backgroundColor: props.color } }),
                React.createElement(Animated.View, { style: { zIndex: 11, width: props.playBufferX === null ? 0 : props.admRePlay ? 0 : props.playBufferX, height: 2, backgroundColor: props.cachColor, position: "absolute", left: 10 } }),
                React.createElement(View, Object.assign({ style: { zIndex: 9999, padding: 12, left: -14, backgroundColor: "rgba(0,0,0,0)" } }, props.panHandlers),
                    React.createElement(View, { ref: "dotspeed", style: { height: 10, width: 10, borderRadius: 10, backgroundColor: props.dotColor, borderWidth: 4, padding: 4, left: -2, borderColor: "rgba(255,255,255,0)" } })),
                React.createElement(View, { style: { height: 2, backgroundColor: props.allSpeedColor, position: "absolute", width: props.width - 200, zIndex: 9, left: 10 } })),
            React.createElement(View, { style: {} },
                React.createElement(Text, { style: { color: "#ffffff" } }, props.admRePlay ? "00:00" : props.allTime))));
    }
}
/* 拖动进度条展示拖动当前时时间 */
export class SpeedTipTime extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            goSpeedTime: "00:00",
        };
        this.setgoSpeedTime = (goSpeedTime) => {
            this.setState({ goSpeedTime });
        };
    }
    render() {
        const { props } = this;
        return (React.createElement(View, { ref: "gotimeSpeed", style: {
                left: props.width / 2 - 45, position: "absolute",
                top: 50, bottom: 50, justifyContent: "center",
                opacity: 0,
                width: 0
            } },
            React.createElement(View, { style: {
                    flexDirection: "row", justifyContent: "center", alignItems: 'center', backgroundColor: "rgba(0,0,0,0.7)", paddingHorizontal: 10,
                    paddingVertical: 6, borderRadius: 4,
                } },
                React.createElement(View, null,
                    React.createElement(Text, { style: { color: "#fff" } }, this.state.goSpeedTime)),
                React.createElement(View, null,
                    React.createElement(Text, { style: { color: "#fff" } }, "/")),
                React.createElement(View, null,
                    React.createElement(Text, { style: { color: "#fff" } }, props.allTime)))));
    }
}
const styles = StyleSheet.create({
    TipsPausedBox: {
        flexDirection: "row", backgroundColor: "rgba(0,0,0,0.8)", borderRadius: 4, paddingVertical: 6, paddingHorizontal: 8, position: "absolute", alignItems: "center"
    },
    TipsPausedText: {
        color: "#fff", fontSize: 14, paddingLeft: 5
    }
});
//# sourceMappingURL=index.js.map