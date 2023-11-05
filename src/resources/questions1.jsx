Array[([], [], [])];
const questions = [
  //sections
  [
    //sectionInfo
    {
      sectionName: "xyz",
      unit: 1,
      guideBook: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus at libero sollicitudin bibendum. Morbi luctus, urna vel auctor ultricies, lorem augue tincidunt mi, in euismod risus massa in libero. Sed sit amet libero eu nisi blandit mattis. Nulla ac enim nec odio viverra scelerisque. Integer eget ultricies velit. Fusce tristique eros et quam aliquet, et suscipit lectus semper. Nullam id erat quis ex sodales viverra. Cras in lacinia nulla. Vivamus at justo a odio lacinia tempus. In hac habitasse platea dictumst.
            
            Mauris auctor, velit in consequat tincidunt, purus ipsum consectetur orci, et scelerisque sapien metus at nunc. Sed tincidunt tellus nec tellus pharetra, ut cursus velit tristique. In auctor sapien vel sem tincidunt rhoncus. Vivamus nec odio non dolor venenatis eleifend. Integer nec sapien ac est hendrerit semper. Suspendisse in tellus vel nunc tempor sollicitudin. Fusce dictum libero a libero hendrerit, at posuere metus gravida.
            
            Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.
            
            Praesent ultricies vestibulum nulla, in venenatis elit laoreet eu. Suspendisse fermentum odio non arcu volutpat, a tempus odio auctor. Vestibulum bibendum quam ut dolor vulputate, sit amet bibendum elit cursus. Vivamus auctor augue vel malesuada. Integer vitae hendrerit urna. In luctus ultricies tellus, a bibendum tortor sagittis vel. Nulla convallis nunc in purus aliquet, nec facilisis felis feugiat. Donec eget justo lacinia, laoreet justo eu, euismod libero. Nunc sed urna vel odio tincidunt cursus. Vestibulum bibendum elit nec orci bibendum, at mattis quam luctus. Nulla posuere leo eget nulla condimentum. Integer fermentum, dui a aliquet eleifend, velit sem lacinia tortor, a volutpat ex odio et orci. Sed sagittis bibendum mi, ac eleifend velit facilisis ac. Nullam volutpat nulla a eros vehicula, ac ullamcorper elit scelerisque. Curabitur in efficitur justo.`,
    },
    //questions
    {
      id: "xyz1",
      text: "this is a first dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "xyz2",
      text: "this is a second dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "xyz3",
      text: "this is a third dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "xyz4",
      text: "this is a fourth dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "xyz5",
      text: "this is a fifth dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "xyz6",
      text: "this is a sixth dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
  ],
  [
    //sectionInfo
    {
      sectionName: "abc",
      unit: 1,
      guideBook: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus at libero sollicitudin bibendum. Morbi luctus, urna vel auctor ultricies, lorem augue tincidunt mi, in euismod risus massa in libero. Sed sit amet libero eu nisi blandit mattis. Nulla ac enim nec odio viverra scelerisque. Integer eget ultricies velit. Fusce tristique eros et quam aliquet, et suscipit lectus semper. Nullam id erat quis ex sodales viverra. Cras in lacinia nulla. Vivamus at justo a odio lacinia tempus. In hac habitasse platea dictumst.
            
            Mauris auctor, velit in consequat tincidunt, purus ipsum consectetur orci, et scelerisque sapien metus at nunc. Sed tincidunt tellus nec tellus pharetra, ut cursus velit tristique. In auctor sapien vel sem tincidunt rhoncus. Vivamus nec odio non dolor venenatis eleifend. Integer nec sapien ac est hendrerit semper. Suspendisse in tellus vel nunc tempor sollicitudin. Fusce dictum libero a libero hendrerit, at posuere metus gravida.
            
            Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.
            
            Praesent ultricies vestibulum nulla, in venenatis elit laoreet eu. Suspendisse fermentum odio non arcu volutpat, a tempus odio auctor. Vestibulum bibendum quam ut dolor vulputate, sit amet bibendum elit cursus. Vivamus auctor augue vel malesuada. Integer vitae hendrerit urna. In luctus ultricies tellus, a bibendum tortor sagittis vel. Nulla convallis nunc in purus aliquet, nec facilisis felis feugiat. Donec eget justo lacinia, laoreet justo eu, euismod libero. Nunc sed urna vel odio tincidunt cursus. Vestibulum bibendum elit nec orci bibendum, at mattis quam luctus. Nulla posuere leo eget nulla condimentum. Integer fermentum, dui a aliquet eleifend, velit sem lacinia tortor, a volutpat ex odio et orci. Sed sagittis bibendum mi, ac eleifend velit facilisis ac. Nullam volutpat nulla a eros vehicula, ac ullamcorper elit scelerisque. Curabitur in efficitur justo.`,
    },
    //questions
    {
      id: "abc1",
      text: "this is a first dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "abc2",
      text: "this is a second dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "abc3",
      text: "this is a third dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "abc4",
      text: "this is a fourth dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "abc5",
      text: "this is a fifth dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "abc6",
      text: "this is a sixth dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
  ],
  [
    //sectionInfo
    {
      sectionName: "pqr",
      unit: 1,
      guideBook: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus at libero sollicitudin bibendum. Morbi luctus, urna vel auctor ultricies, lorem augue tincidunt mi, in euismod risus massa in libero. Sed sit amet libero eu nisi blandit mattis. Nulla ac enim nec odio viverra scelerisque. Integer eget ultricies velit. Fusce tristique eros et quam aliquet, et suscipit lectus semper. Nullam id erat quis ex sodales viverra. Cras in lacinia nulla. Vivamus at justo a odio lacinia tempus. In hac habitasse platea dictumst.
            
            Mauris auctor, velit in consequat tincidunt, purus ipsum consectetur orci, et scelerisque sapien metus at nunc. Sed tincidunt tellus nec tellus pharetra, ut cursus velit tristique. In auctor sapien vel sem tincidunt rhoncus. Vivamus nec odio non dolor venenatis eleifend. Integer nec sapien ac est hendrerit semper. Suspendisse in tellus vel nunc tempor sollicitudin. Fusce dictum libero a libero hendrerit, at posuere metus gravida.
            
            Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.
            
            Praesent ultricies vestibulum nulla, in venenatis elit laoreet eu. Suspendisse fermentum odio non arcu volutpat, a tempus odio auctor. Vestibulum bibendum quam ut dolor vulputate, sit amet bibendum elit cursus. Vivamus auctor augue vel malesuada. Integer vitae hendrerit urna. In luctus ultricies tellus, a bibendum tortor sagittis vel. Nulla convallis nunc in purus aliquet, nec facilisis felis feugiat. Donec eget justo lacinia, laoreet justo eu, euismod libero. Nunc sed urna vel odio tincidunt cursus. Vestibulum bibendum elit nec orci bibendum, at mattis quam luctus. Nulla posuere leo eget nulla condimentum. Integer fermentum, dui a aliquet eleifend, velit sem lacinia tortor, a volutpat ex odio et orci. Sed sagittis bibendum mi, ac eleifend velit facilisis ac. Nullam volutpat nulla a eros vehicula, ac ullamcorper elit scelerisque. Curabitur in efficitur justo.`,
    },
    //questions
    {
      id: "pqr1",
      text: "this is a first dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "pqr2",
      text: "this is a second dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "pqr3",
      text: "this is a third dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "pqr4",
      text: "this is a fourth dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "pqr5",
      text: "this is a fifth dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "pqr6",
      text: "this is a sixth dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
  ],
  [
    //sectionInfo
    {
      sectionName: "jkl",
      unit: 1,
      guideBook: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus at libero sollicitudin bibendum. Morbi luctus, urna vel auctor ultricies, lorem augue tincidunt mi, in euismod risus massa in libero. Sed sit amet libero eu nisi blandit mattis. Nulla ac enim nec odio viverra scelerisque. Integer eget ultricies velit. Fusce tristique eros et quam aliquet, et suscipit lectus semper. Nullam id erat quis ex sodales viverra. Cras in lacinia nulla. Vivamus at justo a odio lacinia tempus. In hac habitasse platea dictumst.
            
            Mauris auctor, velit in consequat tincidunt, purus ipsum consectetur orci, et scelerisque sapien metus at nunc. Sed tincidunt tellus nec tellus pharetra, ut cursus velit tristique. In auctor sapien vel sem tincidunt rhoncus. Vivamus nec odio non dolor venenatis eleifend. Integer nec sapien ac est hendrerit semper. Suspendisse in tellus vel nunc tempor sollicitudin. Fusce dictum libero a libero hendrerit, at posuere metus gravida.
            
            Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.
            
            Praesent ultricies vestibulum nulla, in venenatis elit laoreet eu. Suspendisse fermentum odio non arcu volutpat, a tempus odio auctor. Vestibulum bibendum quam ut dolor vulputate, sit amet bibendum elit cursus. Vivamus auctor augue vel malesuada. Integer vitae hendrerit urna. In luctus ultricies tellus, a bibendum tortor sagittis vel. Nulla convallis nunc in purus aliquet, nec facilisis felis feugiat. Donec eget justo lacinia, laoreet justo eu, euismod libero. Nunc sed urna vel odio tincidunt cursus. Vestibulum bibendum elit nec orci bibendum, at mattis quam luctus. Nulla posuere leo eget nulla condimentum. Integer fermentum, dui a aliquet eleifend, velit sem lacinia tortor, a volutpat ex odio et orci. Sed sagittis bibendum mi, ac eleifend velit facilisis ac. Nullam volutpat nulla a eros vehicula, ac ullamcorper elit scelerisque. Curabitur in efficitur justo.`,
    },
    //questions
    {
      id: "jkl1",
      text: "this is a first dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "jkl2",
      text: "this is a second dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "jkl3",
      text: "this is a third dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "jkl4",
      text: "this is a fourth dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "jkl5",
      text: "this is a fifth dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "jkl6",
      text: "this is a sixth dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
  ],
  [
    //sectionInfo
    {
      sectionName: "ghi",
      unit: 1,
      guideBook: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus at libero sollicitudin bibendum. Morbi luctus, urna vel auctor ultricies, lorem augue tincidunt mi, in euismod risus massa in libero. Sed sit amet libero eu nisi blandit mattis. Nulla ac enim nec odio viverra scelerisque. Integer eget ultricies velit. Fusce tristique eros et quam aliquet, et suscipit lectus semper. Nullam id erat quis ex sodales viverra. Cras in lacinia nulla. Vivamus at justo a odio lacinia tempus. In hac habitasse platea dictumst.
            
            Mauris auctor, velit in consequat tincidunt, purus ipsum consectetur orci, et scelerisque sapien metus at nunc. Sed tincidunt tellus nec tellus pharetra, ut cursus velit tristique. In auctor sapien vel sem tincidunt rhoncus. Vivamus nec odio non dolor venenatis eleifend. Integer nec sapien ac est hendrerit semper. Suspendisse in tellus vel nunc tempor sollicitudin. Fusce dictum libero a libero hendrerit, at posuere metus gravida.
            
            Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.
            
            Praesent ultricies vestibulum nulla, in venenatis elit laoreet eu. Suspendisse fermentum odio non arcu volutpat, a tempus odio auctor. Vestibulum bibendum quam ut dolor vulputate, sit amet bibendum elit cursus. Vivamus auctor augue vel malesuada. Integer vitae hendrerit urna. In luctus ultricies tellus, a bibendum tortor sagittis vel. Nulla convallis nunc in purus aliquet, nec facilisis felis feugiat. Donec eget justo lacinia, laoreet justo eu, euismod libero. Nunc sed urna vel odio tincidunt cursus. Vestibulum bibendum elit nec orci bibendum, at mattis quam luctus. Nulla posuere leo eget nulla condimentum. Integer fermentum, dui a aliquet eleifend, velit sem lacinia tortor, a volutpat ex odio et orci. Sed sagittis bibendum mi, ac eleifend velit facilisis ac. Nullam volutpat nulla a eros vehicula, ac ullamcorper elit scelerisque. Curabitur in efficitur justo.`,
    },
    //questions
    {
      id: "ghi1",
      text: "this is a first dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "ghi2",
      text: "this is a second dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "ghi3",
      text: "this is a third dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "ghi4",
      text: "this is a fourth dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "ghi5",
      text: "this is a fifth dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
    {
      id: "ghi6",
      text: "this is a sixth dummy question",
      ans: [
        "this is the correct ans",
        "this is a wrong ans",
        "this is also a wrong ans",
        "this is a incorrect ans",
      ],
      ansExplanation: `This a fake answer solution.Nunc tincidunt, dui a gravida suscipit, ipsum dui malesuada tellus, a ultrices mi augue eget nisl. Fusce eu ante sit amet augue egestas posuere ut eu nulla. Fusce tempus ut justo sit amet convallis. Vestibulum sit amet est sed purus semper iaculis. Nulla facilisi. Nunc vestibulum, ante a commodo hendrerit, turpis velit auctor tellus, nec egestas metus ante sit amet nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam efficitur enim vel massa tincidunt, vel consectetur tortor varius. Fusce at semper odio. Vivamus viverra libero in ultrices. Etiam sit amet odio nec dui facilisis varius.`,
    },
  ],
];
export default questions;
