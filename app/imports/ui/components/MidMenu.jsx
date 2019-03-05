import React from 'react';
import { Image, Container, Grid, Icon, Dropdown, Menu, Sticky } from 'semantic-ui-react';

export default class MidMenu extends React.Component {
  render() {
    return (
        <div className="black-background midMenu">
          <div className="black-background">
            <Menu inverted secondary>
              <Container>
                <Menu.Item fitted><Icon inverted color="grey" name="facebook f"/></Menu.Item>
                <Menu.Item fitted><Icon inverted color="grey" name="twitter"/></Menu.Item>
                <Menu.Item fitted><Icon inverted color="grey" name="youtube"/></Menu.Item>
                <Menu.Item fitted><Icon inverted color="grey" name="instagram"/></Menu.Item>
                <Menu.Item fitted><Icon inverted color="grey" name="rss"/></Menu.Item>
                <Menu.Item fitted position="right"><Icon inverted color="grey" name="search"/></Menu.Item>
                <Menu.Item fitted><Icon inverted color="grey" name="user"/></Menu.Item>
                <Menu.Item fitted>
                  <Dropdown text="MY CART 0" icon="shop">
                    <Dropdown.Menu>
                      <Dropdown.Item>Your cart is currently empty.</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
              </Container>
            </Menu>
          </div>
          <div className="logo black-background boxLogo">
            <Grid centered className="gridLogo">
              <Image src="https://cdn.shopify.com/s/files/1/0077/5352/t/6/assets/logo.png?7805528210679224734"
                     className="logo" verticalAlign="bottom"/>
            </Grid>
          </div>
          <Sticky className="menuSelect">
            <Grid centered>
              <Menu inverted>
                <Menu.Item>
                  <div className="text">HOME</div>
                </Menu.Item>
                <Menu.Item>
                  <div className="text">MENS</div>
                </Menu.Item>
                <Menu.Item>
                  <div className="text">WOMENS</div>
                </Menu.Item>
                <Menu.Item>
                  <div className="text">KIDS</div>
                </Menu.Item>
                <Menu.Item>
                  <div className="text">HOODIES & CREWNECKS</div>
                </Menu.Item>
                <Menu.Item>
                  <div className="text">ACCESSORIES</div>
                </Menu.Item>
                <Menu.Item>
                  <div className="text">SIGNATURE</div>
                </Menu.Item>
                <Menu.Item>
                  <div className="text">UK SHOP</div>
                </Menu.Item>
              </Menu>
            </Grid>
          </Sticky>
        </div>
    );
  }
}
