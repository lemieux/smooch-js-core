# SunshineConversationsClient.UserUpdateEventAllOfPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**User**](User.md) | The updated user. | [optional] 
**reason** | **String** | The reason why the user was updated, if applicable. * &#x60;authentication&#x60; - An anonymous user became an [identified](https://docs.smooch.io/guide/intro-to-users/) user.  | [optional] 
**source** | [**SourceWebhook**](SourceWebhook.md) | The source of the creation. | [optional] 



## Enum: ReasonEnum


* `authentication` (value: `"authentication"`)



