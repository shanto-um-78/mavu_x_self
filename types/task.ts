export type Task = {
  jobId: string;
  taskEvaluation: string;
  taskReviewText: string;
  taskReviewScore: number;
  updatedAt: string;
  assignedUser: any;
  approvedAt: string;
  assignedUserId: string;
  cancelledAt: string;
  createdAt: string;
  creatorUserId: string;
  id: string;
  job: any;
  rejectedAt: string;
  submittedAt: string;
  taskEndTime: string;
  taskIdFromSmartContract: string;
  taskLocation: string;
  taskStatus: string;
  taskSubmissionUrl: string;
  taskUniqueKey: string;
  textSubmission: string;
  rewardDistributed: boolean;
  numberOfCompletedTransactions: number;
  deepLink: string;
  questionSubmissions: any;
  socialMediaPostUrl: string;
  verificationResult: {
    score: number;
    details: {
      reason?: string;
      error?: string;
    };
    isVerified: boolean;
    reason?: string;
    error?: string;
  };
};
