export interface IActivity {
  involvements: string;
  achievements: string;
}

export interface IActivityStore {
  activities: IActivity;
  reset: (activityItem: IActivity) => void;
  get: () => IActivity;
  updateInvolvements: (involvements: string) => void;
  updateAchievements: (achievements: string) => void;
}
