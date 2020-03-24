import { __extends, __rest } from "tslib";
import React, { PureComponent } from 'react';
import { Platform, SafeAreaView, View, StatusBar } from 'react-native';
var SafeView = /** @class */ (function (_super) {
    __extends(SafeView, _super);
    function SafeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafeView.prototype.render = function () {
        var _a = this.props, style = _a.style, rest = __rest(_a, ["style"]);
        if (Platform.OS === 'ios') {
            var isHighVersion = parseInt(String(Platform.Version), 10) >= 11;
            return <SafeAreaView style={[style, {
                    marginTop: isHighVersion ? 0 : 22,
                    flex: 1,
                    width: '100%'
                }]} {...rest}>
        {this.props.children}
      </SafeAreaView>;
        }
        return <View style={[style, {
                marginTop: StatusBar.currentHeight,
                flex: 1,
                width: '100%'
            }]} {...rest}>
      {this.props.children}
    </View>;
    };
    return SafeView;
}(PureComponent));
export default SafeView;
