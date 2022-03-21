import React, { useRef, useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
  RefreshControl,
} from "react-native";
import Animated from "react-native-reanimated";

import Header from "../components/Header";
import Footer from "../components/Footer";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const Home = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.body}>
      <StatusBar barStyle="light-content" />
      <Animated.ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={true}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={"#fff"}
            title={"Loading..."}
            titleColor={"#fff"}
          />
        }
      >
        <Text
          style={{
            padding: 12,
            marginTop: 100,
            marginBottom: 36,
            backgroundColor: "white",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          suscipit diam eu nulla vulputate tristique. Pellentesque facilisis
          arcu tincidunt ante tempor, vel consequat turpis bibendum. Sed aliquam
          in ante sed hendrerit. Curabitur arcu massa, pulvinar eu risus quis,
          gravida vehicula leo. Pellentesque habitant morbi tristique senectus
          et netus et malesuada fames ac turpis egestas. Nunc porttitor orci ac
          nisi commodo, sed lobortis mi lacinia. Donec egestas vulputate risus
          et finibus. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Nulla nunc dui, vestibulum et velit lobortis, aliquam
          tristique quam. Ut venenatis rhoncus euismod. Pellentesque ac nibh
          vestibulum, molestie diam eu, vestibulum massa. Quisque id magna
          ultricies, fringilla justo vel, varius ligula. Aliquam erat volutpat.
          Pellentesque sollicitudin odio ut varius consequat. In tincidunt
          laoreet lacus, non elementum tortor tristique quis. Pellentesque et
          porta arcu. Nulla gravida mauris sapien, non sodales magna lacinia a.
          Aenean condimentum magna dolor, vitae venenatis odio eleifend
          sollicitudin. Ut scelerisque lorem ut volutpat ultrices. Etiam
          facilisis vel lorem non pulvinar. Sed mi lectus, condimentum in turpis
          at, suscipit aliquet erat. Aliquam erat volutpat. Sed sollicitudin,
          orci suscipit faucibus viverra, sem purus lobortis lorem, et elementum
          nunc turpis nec augue. Proin ornare turpis non turpis fringilla, sed
          sagittis tellus pharetra. Nunc in nulla nunc. Integer eu sem congue,
          malesuada orci vel, ullamcorper nisl. Pellentesque porta et leo ac
          lobortis. Nunc finibus nec est a cursus. Praesent fermentum vel neque
          id facilisis. Nunc elementum lacus euismod luctus ornare. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Ut volutpat ex sed vestibulum posuere. Aenean mollis
          faucibus nisi, nec tincidunt turpis congue eleifend. Quisque varius
          tellus lorem, tempus bibendum lacus ultricies hendrerit. Nunc sagittis
          turpis a arcu suscipit fermentum non et mauris. Aliquam ornare maximus
          nisl, eget euismod velit pharetra vitae. Suspendisse auctor tristique
          est, a aliquam dui pretium nec. Sed neque dui, porta sed dui faucibus,
          viverra aliquet ligula. Quisque faucibus libero leo, sit amet maximus
          nibh congue quis. Curabitur gravida urna eget bibendum dictum. Mauris
          porta vitae ligula non congue. Praesent tincidunt, metus at facilisis
          dictum, libero nibh fermentum sem, eget iaculis magna ligula sit amet
          dui. Nunc at purus pretium, consectetur diam quis, aliquam ligula.
          Morbi rutrum nisl dui, quis venenatis quam bibendum sed. Donec auctor
          sem nunc. Fusce congue, felis porttitor maximus vehicula, tortor nisi
          vehicula nulla, sed mollis mauris felis et orci. Aliquam elementum
          dolor neque, id hendrerit augue dignissim sed. Fusce semper, dui sit
          amet malesuada ultricies, urna lorem ullamcorper tellus, id rhoncus
          eros odio in neque. Sed quis massa ornare, condimentum metus vitae,
          ultricies ante. Nullam in pellentesque eros. Etiam lacus ligula,
          consequat id dolor a, euismod fermentum eros. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse suscipit diam eu nulla
          vulputate tristique. Pellentesque facilisis arcu tincidunt ante
          tempor, vel consequat turpis bibendum. Sed aliquam in ante sed
          hendrerit. Curabitur arcu massa, pulvinar eu risus quis, gravida
          vehicula leo. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas. Nunc porttitor orci ac nisi
          commodo, sed lobortis mi lacinia. Donec egestas vulputate risus et
          finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Nulla nunc dui, vestibulum et velit lobortis, aliquam tristique quam.
          Ut venenatis rhoncus euismod. Pellentesque ac nibh vestibulum,
          molestie diam eu, vestibulum massa. Quisque id magna ultricies,
          fringilla justo vel, varius ligula. Aliquam erat volutpat.
          Pellentesque sollicitudin odio ut varius consequat. In tincidunt
          laoreet lacus, non elementum tortor tristique quis. Pellentesque et
          porta arcu. Nulla gravida mauris sapien, non sodales magna lacinia a.
          Aenean condimentum magna dolor, vitae venenatis odio eleifend
          sollicitudin. Ut scelerisque lorem ut volutpat ultrices. Etiam
          facilisis vel lorem non pulvinar. Sed mi lectus, condimentum in turpis
          at, suscipit aliquet erat. Aliquam erat volutpat. Sed sollicitudin,
          orci suscipit faucibus viverra, sem purus lobortis lorem, et elementum
          nunc turpis nec augue. Proin ornare turpis non turpis fringilla, sed
          sagittis tellus pharetra. Nunc in nulla nunc. Integer eu sem congue,
          malesuada orci vel, ullamcorper nisl. Pellentesque porta et leo ac
          lobortis. Nunc finibus nec est a cursus. Praesent fermentum vel neque
          id facilisis. Nunc elementum lacus euismod luctus ornare. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Ut volutpat ex sed vestibulum posuere. Aenean mollis
          faucibus nisi, nec tincidunt turpis congue eleifend. Quisque varius
          tellus lorem, tempus bibendum lacus ultricies hendrerit. Nunc sagittis
          turpis a arcu suscipit fermentum non et mauris. Aliquam ornare maximus
          nisl, eget euismod velit pharetra vitae. Suspendisse auctor tristique
          est, a aliquam dui pretium nec. Sed neque dui, porta sed dui faucibus,
          viverra aliquet ligula. Quisque faucibus libero leo, sit amet maximus
          nibh congue quis. Curabitur gravida urna eget bibendum dictum. Mauris
          porta vitae ligula non congue. Praesent tincidunt, metus at facilisis
          dictum, libero nibh fermentum sem, eget iaculis magna ligula sit amet
          dui. Nunc at purus pretium, consectetur diam quis, aliquam ligula.
          Morbi rutrum nisl dui, quis venenatis quam bibendum sed. Donec auctor
          sem nunc. Fusce congue, felis porttitor maximus vehicula, tortor nisi
          vehicula nulla, sed mollis mauris felis et orci. Aliquam elementum
          dolor neque, id hendrerit augue dignissim sed. Fusce semper, dui sit
          amet malesuada ultricies, urna lorem ullamcorper tellus, id rhoncus
          eros odio in neque. Sed quis massa ornare, condimentum metus vitae,
          ultricies ante. Nullam in pellentesque eros. Etiam lacus ligula,
          consequat id dolor a, euismod fermentum eros.
        </Text>
        <Header animatedValue={scrollY} />
        <Footer animatedValue={scrollY} />
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: "grey",
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
  },

  line: {
    borderTopWidth: 0.2,
    borderTopColor: "black",
  },

  content: {
    display: "flex",
  },

  dropdown: {
    borderRadius: 10,
    color: "red",
  },
});

export default Home;
