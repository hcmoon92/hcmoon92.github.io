module Jekyll
    class GenerateCategoryPages < Generator
      safe true
  
      def generate(site)
        site.categories.each do |category, posts|
          site.pages << CategoryPage.new(site, site.source, "/categories/#{category}", category)
        end
        site.tags.each do |tag, posts|
          site.pages << TagPage.new(site, site.source, "/tags/#{tag}", tag)
        end
      end
    end
  
    class CategoryPage < Page
      def initialize(site, base, dir, category)
        super(site, base, dir, 'index.html')
        self.data['title'] = category
        self.data['layout'] = 'category'
      end
    end
  
    class TagPage < Page
      def initialize(site, base, dir, tag)
        super(site, base, dir, 'index.html')
        self.data['title'] = tag
        self.data['layout'] = 'tag'
      end
    end
  end
  