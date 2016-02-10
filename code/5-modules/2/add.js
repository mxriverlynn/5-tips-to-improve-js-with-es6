export default function add(...args){
  return args.reduce((total, current) => {
    return total + current;
  }, 0);
}
