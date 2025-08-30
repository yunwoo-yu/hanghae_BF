import { useNavigate } from 'react-router';

import { Button } from '@/elements/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/elements/dialog';

export const Error = () => {
  const navigate = useNavigate();

  return (
    <Dialog open={true}>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>알 수 없는 오류가 발생했습니다.</DialogTitle>
          <DialogDescription>뒤로가기 버튼을 눌러 이전 페이지로 돌아가세요.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant={'outline'} onClick={() => navigate(-1)}>
            뒤로가기
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
