(()=>{
  let inEnable = true;
  inEnable= false

  let isNew : boolean = false
  console.log(isNew)
  isNew = true
  console.log(isNew)

  const random = Math.random();
  console.log(random)
  isNew = random >= 0.5 ? true : false
  console.log(isNew)
})();
