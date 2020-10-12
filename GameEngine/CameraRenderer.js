import React, { Component } from "react";
import { View, YellowBox } from "react-native";

export default (state, screen) => {
  if (!state) return null;
  return (
    <View style={{ marginRight: state.camera.offsetX }}>
      {Object.keys(state)
        .filter((key) => state[key].renderer)
        .map((key) => {
          let entity = state[key];
          if (typeof entity.renderer === "object")
            return (
              <entity.renderer.type key={key} {...entity} screen={screen} />
            );
          else if (typeof entity.renderer === "function")
            return <entity.renderer key={key} {...entity} screen={screen} />;
        })}
    </View>
  );
};
