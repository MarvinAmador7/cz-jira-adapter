"format cjs";

var filter = function(array) {
  return array.filter(function(x) {
    return x;
  });
};

module.exports = function (options) {

  return {
    prompter: function(cz, commit) {
      console.log('\nLine 1 will be cropped at 100 characters. All other lines will be wrapped after 100 characters.\n');
      cz.prompt([
        {
          type: 'input',
          name: 'ticket',
          message: 'Add Jira\'s ticket number related to the commit changes (HOT-12):\n'
        }, {
          type: 'input',
          name: 'time',
          message: 'Add how much time do you spend on the commit (4h 30m):\n'
        }, {
          type: 'input',
          name: 'message',
          message: 'Provide a commmit message (add auth helper):\n'
        }
      ]).then(function(answers) {

        var maxLineWidth = 100;

        var wrapOptions = {
          trim: true,
          newline: '\n',
          indent:'',
          width: maxLineWidth
        };

        commit(`${answers.ticket} #time ${answers.time} ${answers.message}`);
      });
    }
  };
};
