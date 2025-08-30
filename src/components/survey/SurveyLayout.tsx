import { Card, CardContent } from '@/elements/card';
import { Layout } from '@/elements/layout';

export const SurveyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Card className="max-w-lg mx-auto bg-white/90 backdrop-blur-sm border-0 shadow-md relative z-10">
        <CardContent className="text-center pt-8 pb-8">{children}</CardContent>
      </Card>
    </Layout>
  );
};
