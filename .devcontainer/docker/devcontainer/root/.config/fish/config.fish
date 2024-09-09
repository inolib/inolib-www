# aliases
alias ls='ls -Ahl'

# prompts
function fish_prompt
  printf '\n%s%s%s\n> ' (set_color $fish_color_cwd) $PWD (set_color normal)
end
