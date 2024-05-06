import { StyleSheet } from 'react-native';

import CountryFlag from "react-native-country-flag";
import { Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';

// TODO:
// - Pull real users from API
// - Highlight self in list with green text and (YOU)

interface IUser {
  id: string;
  username: string;
  country: string;
  score: number;
}

export default function TabTwoScreen() {
  const [users, setUsers] = useState<IUser[]>();

  useEffect(() => {
    const users: IUser[] = Array.from({ length: 20 }, (_, index) => ({
      id: `user${index + 1}`,
      username: `user${index + 1}`,
      country: 'us',
      score: Math.floor(Math.random() * 1000)
    }));
    
    setUsers(users);
  }, []);

  return (
    <View style={styles.container}>
      {users?.map((user) => (
        <View style={styles.leaderboardItem} key={user.id}>
          <View style={{flexDirection: 'row'}}>
            <CountryFlag isoCode={user.country} size={15} />
            <Text style={{marginLeft: 10}}>{user.username}</Text>
          </View>
          <Text>{user.score}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  }
});
