# frozen_string_literal: true

source "https://rubygems.org"

#git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

# gem "rails"
gem 'wdm', '>= 0.1.0' if Gem.win_platform?

# gem "jekyll"


group :jekyll_plugins do
    
    ### Set default layout
    ### Ref: https://github.com/benbalter/jekyll-default-layout
    # gem 'jekyll-default-layout'

    ### For GitHub
    gem 'github-pages'

    ### Read data files within jekyll theme-gems and adds the resulting hash to the site's internal data hash
    ### https://github.com/ashmaroli/jekyll-data
    # gem "jekyll-data"


    ### From the following:
    ### https://github.com/timlockridge/timlockridgedotcom/blob/master/Gemfile
    # gem "jekyll-paginate"

    ### From the following:
    ### https://github.com/qian256/qian256.github.io
    ### https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/installation.md
    gem 'jekyll-seo-tag'

    ### From a GitHub vulnerability alert.
    gem "nokogiri", ">= 1.10.8"

    ### Timezone Data Source not found error.
    ### Added this Gem to resolve.
    ### Ref: https://github.com/tzinfo/tzinfo/wiki/Resolving-TZInfo::DataSourceNotFound-Errors
    gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw]

end