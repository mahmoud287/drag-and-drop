<template>
  <a-comment>
    <template slot="actions">
      <span key="comment-basic-like">
        <a-tooltip title="Like">
          <a-icon type="like" theme="filled" />
        </a-tooltip>
        <span style="padding-left: '8px'; cursor: 'auto'">
          {{ 50 }}
        </span>
      </span>
      <span key="comment-basic-dislike">
        <a-tooltip title="Dislike">
          <a-icon type="dislike" theme="filled" />
        </a-tooltip>
        <span style="padding-left: '8px'; cursor: 'auto'">
          {{ 30 }}
        </span>
      </span>
      <span key="comment-basic-reply-to">Reply to</span>
    </template>
    <a slot="author">{{ comment.email }}</a>
    <a-avatar
      slot="avatar"
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    />
    <p slot="content">
      {{ comment.body }}
    </p>
  </a-comment>
</template>

<script>
export default {
  name: "Comment",
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>
