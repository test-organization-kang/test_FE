export const CATEGORY = [
  { value: '', name: '알고리즘' },
  { value: 'Bubble Sort', name: '버블 정렬' },
  { value: 'Insertion Sort', name: '삽입 정렬' },
  { value: 'Selection Sort', name: '선택 정렬' },
  { value: 'Quick Sort', name: '퀵 정렬' },
  { value: 'Merge Sort', name: '병합 정렬' },
  { value: 'Heap Sort', name: '힙 정렬' },
  { value: 'Radix Sort', name: '기수 정렬' },
  { value: 'Binary Search', name: '이진 탐색' },
  { value: 'Linear Search', name: '선형 탐색' },
  { value: 'Depth First Search', name: '깊이 우선 탐색' },
  { value: 'Breadth First Search', name: '너비 우선 탐색' },
  { value: "Dijkstra's Algorithm", name: '다익스트라 알고리즘' },
  { value: 'Bellman-Ford Algorithm', name: '벨만-포드 알고리즘' },
  { value: "Prim's Algorithm", name: '프림 알고리즘' },
  { value: "Kruskal's Algorithm", name: '크루스칼 알고리즘' },
  { value: 'Floyd-Warshall Algorithm', name: '플로이드-워셜 알고리즘' },
  { value: 'Fibonacci Sequence', name: '피보나치 수열' },
  { value: 'Knapsack Problem', name: '배낭 문제' },
  { value: 'Longest Common Subsequence', name: '최장 공통 부분 수열' },
  { value: 'Longest Increasing Subsequence', name: '최장 증가 부분 수열' },
  { value: 'Coin Change Problem', name: '동전 교환 문제' },
  { value: "Strassen's Matrix Multiplication", name: '스트라센의 행렬 곱셈' },
  { value: 'N-Queens Problem', name: 'N-퀸 문제' },
  { value: 'Hamiltonian Paths', name: '해밀턴 경로' },
  { value: 'Permutations Generation', name: '순열 생성' },
  { value: 'Euclidean Algorithm', name: '유클리드 알고리즘' },
  { value: 'Prime Number Checking', name: '소수 판별' },
  { value: 'Matrix Operations', name: '행렬 연산' },
  { value: 'Convex Hull', name: '볼록 껍질' },
  { value: 'Line Segment Intersection', name: '선분 교차' },
  { value: 'Closest Pair of Points', name: '최근접 점 쌍' },
];

export type CategoryValues = (typeof CATEGORY)[number]['value'];

type CategoryNames = (typeof CATEGORY)[number]['name'];

export interface CategoryOption {
  value: CategoryValues;
  name: CategoryNames;
}