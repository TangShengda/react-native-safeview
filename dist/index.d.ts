import { PureComponent } from 'react';
import { ViewStyle } from 'react-native';
interface SafeViewProps {
    style?: ViewStyle;
}
export default class SafeView extends PureComponent<SafeViewProps> {
    render(): {} | null | undefined;
}
export {};
