import type { User } from '@/apis/users';
import { MatchingDialog } from '@/components/MatchingDialog';
import TopThree from '@/components/result/TopThree';
import UserListItem from '@/components/result/UserListItem';
import { Card, CardContent } from '@/elements/card';

export type MatchingUser = Omit<User, 'updatedAt'>;

type Props = {
  title: string;
  users: MatchingUser[];
  startRank?: number;
};

const MatchingSection = ({ title, users, startRank = 1 }: Props) => (
  <Card className="flex-1">
    <CardContent>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <TopThree users={users.slice(0, 3)} />

      <ul className="space-y-4 mt-4">
        {users.slice(3, 5).map((user, index) => (
          <MatchingDialog
            key={`${title}-${user.name}-trigger`}
            renderTrigger={() => <UserListItem user={user} rank={index + startRank + 3} />}
          />
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default MatchingSection;
