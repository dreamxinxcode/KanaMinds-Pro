import { ScrollView, StyleSheet, useColorScheme } from 'react-native';

import CountryFlag from "react-native-country-flag";
import { Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';
import { useTheme } from '@react-navigation/native';

// TODO:
// - Pull real users from API
// - Highlight self in list with green text and (YOU)

interface IUser {
  id: string;
  username: string;
  country: string;
  score: number;
}

const dummyUsers: IUser[] = [
  { id: "user1", username: "Alice", country: "us", score: 9342 },
  { id: "user2", username: "Bob", country: "ca", score: 8271 },
  { id: "user3", username: "Charlie", country: "gb", score: 7450 },
  { id: "user4", username: "David", country: "de", score: 6712 },
  { id: "user5", username: "Emma", country: "fr", score: 5943 },
  { id: "user6", username: "Frank", country: "jp", score: 4821 },
  { id: "user7", username: "Grace", country: "cn", score: 3990 },
  { id: "user8", username: "Henry", country: "in", score: 3128 },
  { id: "user9", username: "Ivy", country: "br", score: 2865 },
  { id: "user10", username: "Jack", country: "au", score: 1982 },
  { id: "user11", username: "Kevin", country: "us", score: 8741 },
  { id: "user12", username: "Lily", country: "ca", score: 7520 },
  { id: "user13", username: "Mason", country: "gb", score: 6398 },
  { id: "user14", username: "Nora", country: "de", score: 5732 },
  { id: "user15", username: "Oscar", country: "fr", score: 4681 },
  { id: "user16", username: "Penny", country: "jp", score: 3829 },
  { id: "user17", username: "Quinn", country: "cn", score: 2984 },
  { id: "user18", username: "Rachel", country: "in", score: 2156 },
  { id: "user19", username: "Steve", country: "br", score: 1328 },
  { id: "user20", username: "Tina", country: "au", score: 982 },
]

export default function TabTwoScreen() {
  const [users, setUsers] = useState<IUser[]>();
  const { colors } = useTheme();

  const fetchLeaderboard = () => {

  };
  
  useEffect(() => {
    setUsers(dummyUsers);
  }, []);

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }}>
      <View style={[styles.container, { backgroundColor: colors.card }]}>
        {users?.map((user) => (
          <View style={[styles.leaderboardItem, { backgroundColor: colors.card }]} key={user.id}>
            <View style={{ flexDirection: 'row', backgroundColor: colors.card }}>
              <CountryFlag isoCode={user.country} size={15} />
              <Text style={{ marginLeft: 10, color: '#FFFFFF' }}>{user.username}</Text>
            </View>
            <Text style={{ color: '#FFFFFF' }}>{user.score}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
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
  }
});
