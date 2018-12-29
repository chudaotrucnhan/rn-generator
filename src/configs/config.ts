export class Config {
  dataBody: object = {
    AppStore: [
      "import { } from 'react-native';",
      "",
      "export default new class AppStore {",
      "   constructor() {",
      "   }",
      "}"
    ],
    AppConfig: [
      "const DOMAIN = 'https://domain.com.vn/';",
      "",
      "export default class AppConfig {",
      "   static URL = `${DOMAIN}`;",
      "   static BASE_URL = `${DOMAIN}test-api/`;",
      "   static BASE_API_URL = `${DOMAIN}test-api/app.php/api/`;",
      "   static CHECK_VERSION_API_URL = `${DOMAIN}test-api/app.php/`;",
      "   static BASE_API_URL_MOBILE = `${DOMAIN}test-api/app.php/api/`;",
      "   static BASE_URL_LCT = `${DOMAIN}test-api/api/lct/`;",
      "}"
    ],
    AppConstant: [
      "import AppConfig from './AppConfig';",
      "",
      "export default {",
      "   CHECK_NEW_VERSION: AppConfig.CHECK_VERSION_API_URL + 'check-version-app',",
      "   SWITCH_USER: AppConfig.BASE_API_URL + 'switch-to-user',",
      "   ALL_USER: AppConfig.BASE_API_URL_MOBILE + 'all-user',",
      "};"
    ],
    MainScreen: [
      "import React, { Component } from 'react';",
      "import { View, Text } from 'react-native';",
      "",
      "export default class MainScreen extends Component {",
      "  constructor(props) {",
      "    super(props);",
      "    this.state = {",
      "      loading: true,",
      "    };",
      "  }",
      "",
      "   render() {",
      "     return (",
      "       <View style={{ flex: 1 }}>",
      "         <Text>MainScreen</Text>",
      "       </View>",
      "     );",
      "   }",
      "}",
    ],
    AppHelper: [
      "import { } from 'react-native';",
      "",
      "export default class AppHelper {",
      "}"
    ],
    AppNavigator: [
      "/* AppNavigator */"
    ]
  }
}