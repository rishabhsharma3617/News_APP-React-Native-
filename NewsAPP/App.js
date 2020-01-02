import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Tab, Tabs,Left,Right,Body,Title,ListItem,List,Button,Thumbnail } from 'native-base';

const articlr_url = ''
const country_code = ''


export default function App() {
  return (
    <Container >
  
   
    <Header hasTabs style={{backgroundColor : '#009387' , alignItems : 'center' , justifyContent : 'center'}}>
      <Left/>
      <Body style={{justifyContent: 'center',alignItems : 'center'}}>
        <Title>Global News</Title>
      </Body>
      <Right />
    </Header>
    
    <Tabs tabBarUnderlineStyle = {{backgroundColor : 'yellow'}}>
      <Tab heading="Tab1" activeTabStyle={{backgroundColor :  '#009387'}}>
      <Container>
        
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={2}>Its time to build a difference and to build a divgefd . .</Text>
              </Body>
              <Right>
              <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
      </Tab>




      <Tab heading="Tab2" activeTabStyle={{backgroundColor :  '#009387'}}>
      <Container>
       
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={2}>Its time to build a difference chuhehcuerrhceer. .</Text>
              </Body>
              <Right>
              <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
      </Tab>


      <Tab heading="Tab3" activeTabStyle={{backgroundColor :  '#009387'}}>
      <Container>
       
        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Sankhadeep</Text>
                <Text note numberOfLines={2}>Its time to build a difference mnnenenneklmnkermk. .</Text>
              </Body>
              <Right>
              <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
      </Tab>



      
    </Tabs>
  </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header : {
    marginTop : 0
  },
  title : {
    justifyContent : 'center',
    alignContent : 'center'
  }
});
