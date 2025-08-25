import { useState } from 'react';

import { Button } from '@/elements/button';
import { Card } from '@/elements/card';
import { Checkbox } from '@/elements/checkbox';
import { Textarea } from '@/elements/textarea';

export const RollingWrite = () => {
  const [newMessage, setNewMessage] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleCreateNote = () => {
    window.alert('롤링페이퍼 작성 완료');
  };

  const handleCancel = () => {
    setNewMessage('');
  };

  return (
    <div className="flex flex-col  h-screen px-12 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">김철수님께 보내는 롤링페이퍼</h1>
        <p className="text-muted-foreground text-lg">10주간 함께한 추억을 담아보세요</p>
      </div>
      <Card className="max-w-md mx-auto mb-8 p-6 bg-card border-border w-full gap-3">
        <h3 className="text-lg font-semibold mb-1 text-card-foreground">롤링페이퍼 작성</h3>
        <div>
          <div className="space-y-4">
            <label className="block text-sm font-medium mb-2 text-card-foreground">메시지</label>
            <Textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="롤링페이퍼 내용을 입력해주세요..."
              className="bg-input border-border min-h-[140px]"
              maxLength={500}
            />
            <p className="text-xs text-muted-foreground mt-1">{newMessage.length}/500자</p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <Checkbox
              id="anonymous"
              checked={isAnonymous}
              onCheckedChange={(checked) => setIsAnonymous(checked as boolean)}
            />
            <label htmlFor="anonymous" className="text-sm text-card-foreground cursor-pointer">
              익명으로 남기기
            </label>
          </div>
          <div className="flex gap-2 pt-2">
            <Button
              onClick={handleCreateNote}
              disabled={!newMessage.trim()}
              className="flex-1 bg-primary hover:bg-primary/90 cursor-pointer"
            >
              작성하기
            </Button>
            <Button variant="outline" onClick={handleCancel} className="flex-1 cursor-pointer">
              취소
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};
