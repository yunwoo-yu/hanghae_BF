import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
  type ChartData,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface UserData {
  name: string;
  taste: number; // 입맛 (0-100)
  values: number; // 가치관 (0-100)
  personality: number; // 성향 (0-100)
}

interface ComparisonRadarChartProps {
  user1Data: UserData;
  user2Data: UserData;
}

const user1Color = 'rgb(255, 159, 177)'; // 코랄 핑크
const user1ColorTransparent = 'rgba(255, 159, 177, 0.3)'; // 반투명 코랄 핑크
const user2Color = 'rgb(144, 202, 249)'; // 스카이 블루
const user2ColorTransparent = 'rgba(144, 202, 249, 0.3)'; // 반투명 스카이 블루
const hoverColor = '#fff'; // 호버 시 흰색

export const ComparisonRadarChart = ({ user1Data, user2Data }: ComparisonRadarChartProps) => {
  const data: ChartData<'radar'> = {
    labels: ['입맛', '가치관', '성향'],
    datasets: [
      {
        label: user1Data.name,
        data: [user1Data.taste, user1Data.values, user1Data.personality],
        borderColor: user1Color,
        backgroundColor: user1ColorTransparent,
        borderWidth: 3,
        pointBackgroundColor: user1Color,
        pointBorderColor: user1Color,
        pointHoverBackgroundColor: hoverColor,
        pointHoverBorderColor: user1Color,
        pointRadius: 6,
        pointHoverRadius: 8,
        fill: true,
      },
      {
        label: user2Data.name,
        data: [user2Data.taste, user2Data.values, user2Data.personality],
        borderColor: user2Color,
        backgroundColor: user2ColorTransparent,
        borderWidth: 3,
        pointBackgroundColor: user2Color,
        pointBorderColor: user2Color,
        pointHoverBackgroundColor: hoverColor,
        pointHoverBorderColor: user2Color,
        pointRadius: 6,
        pointHoverRadius: 8,
        fill: true,
      },
    ],
  };

  return (
    <div className="w-full relative h-[380px]">
      <Radar
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          aspectRatio: 1,
          interaction: {
            intersect: false,
            mode: 'index',
          },
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                padding: 20,
                font: {
                  size: 12,
                  weight: 'bold',
                },
              },
            },
          },
          scales: {
            r: {
              angleLines: {
                color: user1Color,
              },
              grid: {
                color: user1Color,
              },
              pointLabels: {
                display: false,
              },
              ticks: {
                backdropColor: 'transparent',
                color: 'transparent',
                stepSize: 20,
              },
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
};
