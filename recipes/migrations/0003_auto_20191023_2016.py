# Generated by Django 2.2.6 on 2019-10-23 20:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0002_auto_20191023_1942'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='directions',
            field=models.CharField(default=1, max_length=250),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='note',
            field=models.CharField(default=1, max_length=250),
        ),
    ]
