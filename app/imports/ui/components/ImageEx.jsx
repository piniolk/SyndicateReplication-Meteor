import React from 'react';
import { Image, Reveal } from 'semantic-ui-react';

export default class ImageEx extends React.Component {
  render() {
    return (
        <Reveal animated='fade' className="menuImg">
          <Reveal.Content visible>
            <Image src="https://cdn.shopify.com/s/files/1/0077/5352/t/6/assets/slide1.jpg?7805528210679224734"/>
          </Reveal.Content>
          <Reveal.Content hidden>
            <Image src="https://cdn.shopify.com/s/files/1/0077/5352/t/6/assets/slide2.jpg?7805528210679224734"/>
          </Reveal.Content>
        </Reveal>
    );
  }
}
