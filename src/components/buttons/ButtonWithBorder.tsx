import { Text, TouchableOpacity } from 'react-native';
import AppStyles from '../../styles/AppStyles';

type ButtonWithBorderProps = {
    title: string;
    onPress: () => void;
}

const ButtonWithBorder = ({ title, onPress } : ButtonWithBorderProps) => {
    return (
        <TouchableOpacity style={AppStyles.SecondaryButton} onPress={onPress}>
            <Text style={AppStyles.secondaryButtonText}>{title}</Text>
        </TouchableOpacity>
    );
}

export default ButtonWithBorder;