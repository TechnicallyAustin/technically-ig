class PostSerializer
    include FastJsonapi::ObjectSerializer
    attributes :url, :caption, :likes 

    def initialize(post_object)
        @post = post_object
    end

    def to_serialized_json
        @post.to_json()
    end
end
