import React, { Component } from 'react'

import { withTranslation } from 'react-i18next';
class MyComponent extends Component {
render() {
  const {t} = this.props
     return (<h1>{t('this_is_an_example')}</h1>)
   }
}
export default withTranslation()(MyComponent)