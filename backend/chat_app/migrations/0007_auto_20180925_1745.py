# Generated by Django 2.1.1 on 2018-09-25 17:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat_app', '0006_message_author'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='author',
            field=models.TextField(max_length=100, null=True),
        ),
    ]
