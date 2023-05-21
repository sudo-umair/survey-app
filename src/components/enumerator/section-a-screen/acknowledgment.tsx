import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IAcknowledgmentProps } from '@interfaces/components';
import { FONT_SIZES } from '@common/fonts';

const Acknowledgment: React.FC<IAcknowledgmentProps> = ({ name }) => {
  return (
    <Text style={styles.text}>
      [Greet] {`\n`}
      Assalam-o-Alaikum {`\n`}
      {`\n`}
      My name is <Text style={styles.name}>{name}</Text>. I am working as an
      enumerator for gender targeting review study conducted ·by a consultant.
      On behalf of the Department of Agriculture, Government of Sindh and World
      Bank initiative, Sindh Irrigated Agriculture Productivity Enhancement
      Project (SIAPEP), we are working on Review Study in Sindh Irrigated
      Agriculture Productivity Enhancement Project (SIAPEP) to assess
      effectiveness of SIAPEP. We will be asking you a few questions about
      yourself and family, and questions related to this project. {`\n`}
      {`\n`}
      These questions will take about 15 - 20 minutes of your time, however,
      your participation is completely voluntary. If you do not understand a
      question, you can ask, and I will explain it to you. Your responses will
      remain confidential, and if you opt, we will keep your identity
      confidential. If there is any question, which you do not feel comfortable
      with, you are not bound to answer it. My team leader may contact you to
      check my work.
    </Text>
  );
};

export default Acknowledgment;

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: FONT_SIZES.MEDIUM,
    textAlign: 'justify',
  },
  name: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
