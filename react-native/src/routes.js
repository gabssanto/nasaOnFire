import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Mapa from "./pages/Map";
import ButtonArea from './pages/ButtonArea';
import Report from './pages/Report';
import Feed from './pages/Feed';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Mapa: {
                screen: Mapa,
                navigationOptions: {
                    header: null,
                },
            },
            ButtonArea: {
                screen: ButtonArea,
            },
            Report: {
                screen: Report,
            },
            Feed: {
                screen: Feed,
            }
            
        },
        {
            cardStyle: {opacity:1},
            //mode:"modal",
            transparentCard: true,
            headerBackTitleVisible: false,
        }
    )
)

export default Routes;