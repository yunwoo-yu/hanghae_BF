import { Card, CardContent } from '@/elements/card';
import { Layout } from '@/elements/layout';

export const SurveyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Card className="w-full min-h-[calc(100vh-48px)] max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto sm:h-auto sm:min-h-[600px] md:min-h-[700px] bg-white/90 backdrop-blur-sm border-0 shadow-md relative z-10">
        <CardContent className="text-center sm:py-12 md:py-16">{children}</CardContent>
      </Card>
    </Layout>
  );
};
