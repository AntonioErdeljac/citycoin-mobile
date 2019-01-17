import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIconsIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import React from 'react';
import SimpleLineIconsIcon from 'react-native-vector-icons/SimpleLineIcons';
import ZocialIcon from 'react-native-vector-icons/Zocial';

const MaterialCommunityIcons = ({ tintColor, ...rest }) => <MaterialCommunityIconsIcon {...rest} color={tintColor} />;
const SimpleLineIcons = ({ tintColor, ...rest }) => <SimpleLineIconsIcon {...rest} color={tintColor} />;
const MaterialIcons = ({ tintColor, ...rest }) => <MaterialIconsIcon {...rest} color={tintColor} />;
const FontAwesome = ({ tintColor, ...rest }) => <FontAwesomeIcon {...rest} color={tintColor} />;
const Foundation = ({ tintColor, ...rest }) => <FoundationIcon {...rest} color={tintColor} />;
const EvilIcons = ({ tintColor, ...rest }) => <EvilIconsIcon {...rest} color={tintColor} />;
const Ionicons = ({ tintColor, ...rest }) => <IoniconsIcon {...rest} color={tintColor} />;
const Octicons = ({ tintColor, ...rest }) => <OcticonsIcon {...rest} color={tintColor} />;
const Feather = ({ tintColor, ...rest }) => <FeatherIcon {...rest} color={tintColor} />;
const Entypo = ({ tintColor, ...rest }) => <EntypoIcon {...rest} color={tintColor} />;
const Zocial = ({ tintColor, ...rest }) => <ZocialIcon {...rest} color={tintColor} />;

export default {
  MaterialCommunityIcons,
  SimpleLineIcons,
  MaterialIcons,
  FontAwesome,
  Foundation,
  EvilIcons,
  Ionicons,
  Octicons,
  Feather,
  Entypo,
  Zocial,
};
