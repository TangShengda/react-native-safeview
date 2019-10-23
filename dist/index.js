import { __extends, __rest } from "tslib";
import React, { PureComponent } from 'react';
import { Platform, SafeAreaView } from 'react-native';
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
                    flex: 1
                }]} {...rest}>
        {this.props.children}
      </SafeAreaView>;
        }
        return this.props.children;
    };
    return SafeView;
}(PureComponent));
export default SafeView;
