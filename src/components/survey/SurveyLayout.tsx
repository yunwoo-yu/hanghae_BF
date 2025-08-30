import { Card, CardContent } from '@/elements/card';
import { Layout } from '@/elements/layout';

export const SurveyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Card className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto sm:h-auto sm:min-h-[600px] md:min-h-[700px] bg-white/90 backdrop-blur-sm border-0 shadow-md relative z-10">
        <CardContent className="text-center pt-8 pb-8 sm:pt-12 sm:pb-12 md:pt-16 md:pb-16">{children}</CardContent>
      </Card>
    </Layout>
  );
};
