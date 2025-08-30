import { Card, CardContent } from '@/elements/card';

export const SurveyLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-8 relative overflow-hidden">
      <Card className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto h-[calc(100vh-100px)] sm:h-auto sm:min-h-[600px] md:min-h-[700px] bg-white/90 backdrop-blur-sm border-0 shadow-2xl relative z-10">
        <CardContent className="text-center pt-8 pb-8 sm:pt-12 sm:pb-12 md:pt-16 md:pb-16">{children}</CardContent>
      </Card>
    </div>
  );
};
