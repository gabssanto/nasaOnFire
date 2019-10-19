import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Mapa from "./pages/Map";
import ButtonArea from './pages/ButtonArea';
import Report from './pages/Report';
import Feed from './pages/Feed';
import StartingPage from './pages/StartingPage';

const Routes = createAppContainer(
    createStackNavigator(
        {
            StartingPage: {
                screen: StartingPage,   
                navigationOptions: {
                    header: null,
                }
            },
            Mapa: {
                screen: Mapa,
                navigationOptions: {
                    header: null,
                },
            },
            ButtonArea: {
                screen: ButtonArea,
            },
            Feed: {
                screen: Feed
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