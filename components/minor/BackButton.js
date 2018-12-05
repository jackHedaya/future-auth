import React from "react";
import { TouchableOpacity } from "react-native";
import { withRouter } from "react-router-native";

import { Entypo } from "@expo/vector-icons";

import styles from "../../styles/minor/BackButton";

class BackButton extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.onPress);
  }

  render() {
    return (
      <TouchableOpacity style={styles.background} onPress={this.props.history.goBack}>
        <Entypo name="chevron-thin-left" style={styles.icon} />
      </TouchableOpacity>
    );
  }
}

export default withRouter(BackButton);
