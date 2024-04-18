import { Text, View, Image } from 'react-native';
import AppStyles from '../../styles/AppStyles';


type CardErrorProps = {
  image: any;
  text: string;
};

const CardError = ( card: CardErrorProps) => {
  return (
    <View style={AppStyles.errorCard}>
      <Image source={card.image} style={AppStyles.noDataImage} />
      <Text style={AppStyles.errorCardText}>{card.text}</Text>
    </View>
  );
};

export default CardError;