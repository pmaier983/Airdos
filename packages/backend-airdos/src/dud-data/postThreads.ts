export const postThreads = {
  100: {
    id: 100,
    group: 'airdos',
    user: 'pmaier983',
    text: 'Unsupervised Translation of Programming Languages. Feed a model with Python, C++, and Java source code from GitHub, and it automatically learns to translate between the 3 languages in a fully unsupervised way',
    timeCreated: 1591607880,
    replies: [
      {
        id: 101,
        group: 'airdos',
        user: 'pmaier983',
        text: 'We leverage the same principles that we used to translate low-resource languages (https://arxiv.org/abs/1804.07755), i.e. pretraining, denoising auto-encoding, and back-translation. Although initially designed for natural languages, these methods perfectly apply to programming languages.',
        timeCreated: 1591608020,
      },
      {
        id: 102,
        group: 'airdos',
        user: 'pmaier983',
        text: 'The model learns to align functions and objects across libraries (std::unordered_set -> HashSet, printf -> System.out.println, std::vector<int> -> List<Integer>, Files.createDirectories -> os.makedirs), but also language specific patterns (a > b ? a : b -> a if a > b else b)',
        timeCreated: 1591608030,
      },
      {
        id: 103,
        group: 'airdos',
        user: 'pmaier983',
        text: 'We create a parallel test set of around 1000 parallel functions, along with associated unit tests. Unlike previous studies that typically evaluate translated functions with BLEU score, we compile and run translations to verify that they successfully pass the unit tests.',
        timeCreated: 1591608050,
      },
      {
        id: 104,
        group: 'airdos',
        user: 'pmaier983',
        text: 'The model successfully translates more than 90% of C++ functions from @geeksforgeeks into Java, and around 57% of Python functions into C++. It outperforms commercial solutions at test time, although it requires no parallel data or expert knowledge.',
        timeCreated: 1591608060,
      },
      {
        id: 105,
        group: 'airdos',
        user: 'pmaier983',
        text: 'We researchers love pre-training. Our new paper shows that pre-training is unhelpful when we have a lot of labeled data. In contrast, self-training works well even when we have a lot of labeled data. SOTA on PASCAL segmentation & COCO detection. Link: http://arxiv.org/abs/2006.06882 ',
        timeCreated: 1591608080,
      },
    ],
  },
  110: {
    id: 110,
    user: 'brock202',
    text: 'Erdős conjecture on arithmetic progressions – Unsolved problem in mathematics Translation of Programming Languages. Feed a model with Python, C++, and Java source code from GitHub, and it automatically learns to translate between the 3 languages in a fully unsupervised way',
    timeCreated: 1591609880,
    replies: [
      {
        id: 111,
        user: 'brock202',
        text: 'If A is a large set of positive integers, meaning that the sum of reciprocals of the numbers in A diverges to ∞, the conjecture on arithmetic progressions – Unsolved problem in mathematics Translation of Programming Languages. Feed a model with Python, C++, and Java source code from GitHub, and it automatically learns to translate between the 3 languages in a fully unsupervised way',
        timeCreated: 1591609900,
      },
      {
        id: 112,
        user: 'brock202',
        text: 'The special case when A is the set of prime numbers was proved by Ben Green and Terence Tao in 2004 A is a large set of positive integers, meaning that the sum of reciprocals of the numbers in A diverges to ∞, the conjecture on arithmetic progressions – Unsolved problem in mathematics Translation of Programming Languages. Feed a model with Python, C++, and Java source code from GitHub, and it automatically learns to translate between the 3 languages in a fully unsupervised way',
        timeCreated: 1591609920,
      },
    ],
    120: {
      id: 120,
      user: 'brock202',
      text: 'Erdős conjecture on arithmetic progressions – Unsolved problem in mathematics Translation of Programming Languages. Feed a model with Python, C++, and Java source code from GitHub, and it automatically learns to translate between the 3 languages in a fully unsupervised way',
      timeCreated: 1591610,
      replies: [
        {
          id: 121,
          user: 'brock202',
          text: 'If A is a large set of positive integers, meaning that the sum of reciprocals of the numbers in A diverges to ∞, the conjecture on arithmetic progressions – Unsolved problem in mathematics Translation of Programming Languages. Feed a model with Python, C++, and Java source code from GitHub, and it automatically learns to translate between the 3 languages in a fully unsupervised way',
          timeCreated: 1591610050,
          replies: [
            {
              id: 122,
              user: 'brock202',
              text: 'The special case when A is the set of prime numbers was proved by Ben Green and Terence Tao in 2004 A is a large set of positive integers, meaning that the sum of reciprocals of the numbers in A diverges to ∞, the conjecture on arithmetic progressions – Unsolved problem in mathematics Translation of Programming Languages. Feed a model with Python, C++, and Java source code from GitHub, and it automatically learns to translate between the 3 languages in a fully unsupervised way',
              timeCreated: 1591610080,
            },
            {
              id: 123,
              user: 'pmaier983',
              text: 'Erdos is amazing!',
              timeCreated: 1591610100,
            },
          ],
        },
        {
          id: 123,
          user: 'pmaier983',
          text: 'Very Cool!',
          timeCreated: 1591610100,
        },
      ],
    },
  },
}
