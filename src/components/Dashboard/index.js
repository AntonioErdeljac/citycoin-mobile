import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Body, Title, Right, Thumbnail, Left } from 'native-base';

import styles from './styles';

import { MenuButton, Icon } from '../common/components';

class Dashboard extends React.Component {
  constructor() {
    super();

    console.log('dashboard');
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Header transparent>
          <Left>
            <MenuButton onPress={() => navigation.openDrawer()} left name="bars" />
          </Left>
          <Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
            <Title style={{ fontFamily: 'Poppins-Bold', color: '#2C2D4C' }}>Antonio</Title>
          </Body>
          <Right style={{ paddingTop: 5 }}>
            <Thumbnail
              style={{ borderWidth: 2, borderColor: 'white' }}
              source={{ uri: 'https://avatars2.githubusercontent.com/u/23248726?s=460&v=4' }}
              small
            />
          </Right>
        </Header>
        <ScrollView>
          <View style={{ marginTop: 20, padding: 15 }}>
            <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
              <Text style={{ color: '#2C2D4C', fontFamily: 'Poppins-Bold', fontSize: 25 }}>Wallet</Text>
            </View>
            <View style={{ marginTop: 10, backgroundColor: 'white', borderRadius: 5, marginRight: 10, padding: 15 }}>
              <Icon.Entypo name="wallet" color="#4E65F6" size={28} />
              <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: 'row' }}>
                <View>
                  <Text style={{ fontFamily: 'Poppins-Medium', color: '#2C2D4C', paddingTop: 15, fontSize: 18 }}>Money</Text>
                  <Text style={{ fontFamily: 'Poppins-Medium', color: 'rgba(0,0,0,.5)', paddingTop: 5, fontSize: 15 }}>$1000</Text>
                </View>
                <TouchableOpacity style={{ marginLeft: 50, height: 40, width: 40, borderRadius: 50, backgroundColor: '#4E65F6', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Icon.FontAwesome name="plus" color="white" size={15} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 20, padding: 15 }}>
            <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
              <Text style={{ color: '#2C2D4C', fontFamily: 'Poppins-Bold', fontSize: 25 }}>Recents</Text>
            </View>
            <ScrollView style={{ marginTop: 10 }} horizontal showsHorizontalScrollIndicator={false}>
              <View style={{ backgroundColor: 'white', borderRadius: 5, marginRight: 10, padding: 15 }}>
                <Icon.FontAwesome name="bus" color="#4E65F6" size={28} />
                <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: 'row' }}>
                  <View>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#2C2D4C', paddingTop: 15, fontSize: 18 }}>AutoTrolej</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: 'rgba(0,0,0,.5)', paddingTop: 5, fontSize: 15 }}>$17.5</Text>
                  </View>
                  <TouchableOpacity style={{ marginLeft: 50, height: 40, width: 40, borderRadius: 50, backgroundColor: '#4E65F6', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon.Entypo name="chevron-right" color="white" size={20} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ backgroundColor: 'white', borderRadius: 5, marginRight: 10, padding: 15 }}>
                <Icon.MaterialCommunityIcons name="bike" color="#4E65F6" size={28} />
                <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: 'row' }}>
                  <View>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#2C2D4C', paddingTop: 15, fontSize: 18 }}>CitiBike</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: 'rgba(0,0,0,.5)', paddingTop: 5, fontSize: 15 }}>$3.5</Text>
                  </View>
                  <TouchableOpacity style={{ marginLeft: 50, height: 40, width: 40, borderRadius: 50, backgroundColor: '#4E65F6', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon.Entypo name="chevron-right" color="white" size={20} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ backgroundColor: 'white', borderRadius: 5, marginRight: 10, padding: 15 }}>
                <Icon.FontAwesome name="bus" color="#4E65F6" size={28} />
                <View style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexDirection: 'row' }}>
                  <View>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: '#2C2D4C', paddingTop: 15, fontSize: 18 }}>AutoTrans</Text>
                    <Text style={{ fontFamily: 'Poppins-Medium', color: 'rgba(0,0,0,.5)', paddingTop: 5, fontSize: 15 }}>$25.5</Text>
                  </View>
                  <TouchableOpacity style={{ marginLeft: 50, height: 40, width: 40, borderRadius: 50, backgroundColor: '#4E65F6', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Icon.Entypo name="chevron-right" color="white" size={20} />
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Dashboard;
