function timeout(delay: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log(`${delay}秒后执行下一步操作`);
      resolve();
    }, delay);
  });
}

timeout(2000).then(() => {
  console.log("全部操作已完成");
});
