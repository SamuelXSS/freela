import React, { useEffect, useState } from 'react';
import { Image, Text, View, ScrollView } from 'react-native';
import appApi from '../../services/appApi';

import { icon, cancel, confirm } from '../../assets/img/icons';

import { commonStyles } from '../../assets/styles/global';
import styles from './styles';

const JobsList = ({ route }) => {
  const { filter } = route.params;

  const [jobs, setJobs] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      if (filter === 'all') {
        const { data } = await appApi.get('/jobs').catch((err) => console.log(err));

        setJobs(data);
      }
      if (filter === 'filtered') {
        const { data } = await appApi
          .post('/jobs/employees/techs', {
            dev_type: 'frontend',
            technologies: [{ name: 'Python' }, { name: 'R' }],
          })
          .catch((err) => console.log(err));

        setJobs(data);
      }
      setLoading(false);
    }

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView horizontal pagingEnabled>
      {jobs.map((job, index) => (
        <View style={styles.container} key={index}>
          <View style={styles.content}>
            <View style={styles.header}>
              <Image source={icon} style={styles.image} />

              <Text style={[commonStyles.titleText, styles.title]}>
                {job.employers.name}
              </Text>
              <Text style={[commonStyles.regularLabelText, styles.subtitle]}>
                {job.employers.role} | Cidade {index}
              </Text>
            </View>

            <View style={styles.main}>
              <View style={styles.section}>
                <Text style={[commonStyles.boldLabelText, styles.label]}>Vaga</Text>
                <View style={styles.textContainer}>
                  <Text style={[commonStyles.regularLabelText, styles.text]}>
                    {job.name}
                  </Text>
                </View>
              </View>

              <View style={styles.section}>
                <Text style={[commonStyles.boldLabelText, styles.label]}>Descrição</Text>
                <View style={styles.textContainer}>
                  <Text style={[commonStyles.regularLabelText, styles.text]}>
                    Stack: {job.dev_type + '\n'}
                    Requisitos:{job.technologies + '\n'}
                    {job.description}
                  </Text>
                </View>
              </View>

              <View style={styles.section}>
                <Text style={[commonStyles.boldLabelText, styles.label]}>Salário</Text>
                <View style={styles.textContainer}>
                  <Text style={[commonStyles.regularLabelText, styles.text]}>
                    R$ {job.salary}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.footer}>
              <Image source={cancel} style={styles.icon} />
              <Image source={confirm} style={styles.icon} />
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default JobsList;
