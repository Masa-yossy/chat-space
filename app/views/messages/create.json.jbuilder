json.array!@message do |messa|
  json.user_id messa.current_user.id
  json.content messa.content 
  json.image messa.image
  json.user_name messa.user.name
end 