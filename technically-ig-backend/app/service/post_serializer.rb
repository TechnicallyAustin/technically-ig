class PostSerializer
    include FastJsonapi::ObjectSerializer
    has_many :likes
    has_many :comments
    attributes :url, :caption

    def initialize(post_object)
        @post = post_object
    end

    def to_serialized_json
        @post.to_json()
    end
end
