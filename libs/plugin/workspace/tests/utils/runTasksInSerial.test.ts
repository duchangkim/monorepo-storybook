import { runTasksInSerial } from '../../src/utils';

test('전달받은 tasks를 순서대로 실행한다', () => {
  const executionOrderList = [];
  const mockedFirstTask = jest.fn(() => {
    executionOrderList.push(1);
  });
  const mockedSecondTask = jest.fn(() => {
    executionOrderList.push(2);
  });
  const tasks = [mockedFirstTask, mockedSecondTask];

  runTasksInSerial(...tasks)();

  expect(executionOrderList).toEqual([1, 2]);
});
